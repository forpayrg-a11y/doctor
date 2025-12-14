// ...existing code...
import { Storage } from "@google-cloud/storage";

const bucketName = process.env.GCP_BUCKET_NAME;
const clientEmail = process.env.GCP_CLIENT_EMAIL;
const privateKeyRaw = process.env.GCP_PRIVATE_KEY;

if (!bucketName || !clientEmail || !privateKeyRaw) {
  throw new Error("Missing GCS env vars: GCP_BUCKET_NAME / GCP_CLIENT_EMAIL / GCP_PRIVATE_KEY");
}

// Replace literal "\n" with newlines if the key was pasted into env
const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

const storage = new Storage({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});

const bucket = storage.bucket(bucketName);

export async function uploadBufferToGCS(buffer, destinationPath, contentType = "application/octet-stream") {
  const file = bucket.file(destinationPath);
  await file.save(buffer, { contentType, resumable: false });
  // optional: await file.makePublic();
  const publicUrl = `https://storage.googleapis.com/${bucketName}/${encodeURIComponent(destinationPath)}`;
  return { publicUrl, path: destinationPath };
}

export { bucket };
// ...existing code...