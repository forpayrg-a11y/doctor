import { Storage } from '@google-cloud/storage';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fileName, fileType, userName } = body;

    if (!fileName || !fileType) {
      return NextResponse.json(
        { error: 'Missing fileName or fileType' },
        { status: 400 }
      );
    }


    const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8hmLo3RMtxMTE\nikOvy7MqKjEoTLqClGIRKozVOPuj3j+WjND/n9XWW2uxVlriY6iblWAIDzkSh4N/\n4k16P+fAsn1LiEd74QuTOwyRURN9I6NYWlQ37hrppfkdRPpm1o3ooZfzOn3FO1R2\nPFt1KFYTiZmLwbgSUFw6dcrssKapdjFA8bExwOYory19cBc+x9uDsD/m6RGAi2c3\nhMsj0yoBCEciLYpMdmIaiP+gSZGVSf+CZII//Thq/ZyT+/vSGQeVC6y4WG3T8Wb0\nLcpaltqDVr+BZWWXkKBVL4ZFbTznw6AOU2TKvcbW2XW9ZPlkQcOVBBkwzO6dZOq/\nffPZsdenAgMBAAECggEALfhE8QxLS2tCIbynQZwVnY/5OZ7wEbw154KtIacJ8UzV\ny5OduN9UKLdVHMJ2WeK8L+fuKTjxDTwfDBV2F/uyOrIrTDo4WBQpmuaYq2yOKIMC\npx4rkBHO3S9b/c+ekWn644FXyHb4SRos/8G6+WfzCUORvdroVArlWlnzt+BhW0ur\nCXNmI+WpayYToeGzI9mZE7a2oCdt7zcT8/QBmvjeQY1qytYRMAkdGWGlPbwximlk\nrUg4jBzDdCWg4oR5+WNUSuE9Z5YYtbc2j0m/OoaHGzDaIdR//uUdjrj/6qLpNwXo\ncPSHMBezdgcscoCfDlsi6J853k0BLju6sUCwC0yBxQKBgQD8sLIRNJX5dkqnxSPD\nXTP/LJ7LFh3OWA0R4Lne/aisCyuAN3/N1eDRuWgUq7ygZXuaLRblKsSMaEDjWmIy\nMnyXnIQ5k7qDYDLMJz7UDh/j/qfsAUHPKCCnSDfCE7BAsNJspGvJl+smjxZcLN/t\nYyREpWwItV4dSJC3YsrBA/HolQKBgQC+/ok1jOwK/BtI2roPoRI3Qw4eaprFEv6+\nQBoGo0E+fgiZ1W5Wql7a6xfCu28Z8l1J33kkMbkfl845b1cnjl6E33lbJgjZc04k\nqh48Ro6xm1fb6Gp+Ktsk7DcKkN1rS4iHo3aeRbg1g7iVXE+c4qKOyoXNYkrSdwYm\nlC1yYnbkSwKBgGAYZi9q2xn6ZVu1+erC2BJTirPa3kzpaVcCKk1mE64RtWJWONEz\nZAL9yloKEXrB/SZdvVY7VHG89+g+KBfE4WLaz+IBjy2E+OxwhFEqafBPmNaEh91a\n+kgDi8jPqfiABhXw1Vjd4DxSsAMvwZzKVjGQ4yvQpVDnlrlW5ZpPgMCdAoGBAKmT\nvad6M6mdJWyOJ1zxGgdO1h5TcI9BykSJDZKPKMKfjGtpgMoaApZE3Zfca0ySUBni\n/OAR9dgDJOsB3FQWp/05nbo8Dudi5SLQmH/T9aXj0yJBPSxASMqDoGsVLEKzkck8\nbXkhVejNxvl2OImG/+XgEuTEPMKZQzDFp4RDwGP5AoGAc8fDyTjLlrfcWd2Ql9tb\nrqcnl3btNryTh9Ult+DihJgo+Q52dp18k5ObzS9PEyuEVThnTIKWPyGbNRi4D3ut\nYYndd2FtCZeBNnd+jtt/TkwjJOSrZ9iiWgyXjv0TLPrSGBN1ypracqj0W53d6+md\nHmERYkp3z8V7/TPTN3FHFVc=\n-----END PRIVATE KEY-----\n";

 
    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      credentials: {
        client_email: process.env.GCP_CLIENT_EMAIL,
        private_key: privateKey.split(String.raw`\n`).join('\n'), 
      },
    });

    const bucketName = process.env.GCP_BUCKET_NAME!;
    const bucket = storage.bucket(bucketName);
    
    const safeUserName = (userName || 'user')
      .toLowerCase()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '-');

    const dateStr = new Date().toISOString().split('T')[0];
    
    const extension = fileName.split('.').pop();

    const finalFileName = `${safeUserName}_${dateStr}_${Date.now()}.${extension}`;

    const file = bucket.file(finalFileName);
    
    const options = {
      version: 'v4' as const,
      action: 'write' as const,
      expires: Date.now() + 15 * 60 * 1000, 
      contentType: fileType,
    };

    const [url] = await file.getSignedUrl(options);

    return NextResponse.json({ url });

  } catch (error: any) {
    console.error('Error generating signed URL:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: ' + error.message },
      { status: 500 }
    );
  }
}