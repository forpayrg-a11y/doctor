import dbConnect from '@/lib/dbConnect';

export async function GET() {
  try {
    const connection = await dbConnect();
    
    // Get the raw client from mongoose connection
    const client = connection.connection.getClient();
    
    // Test the connection
    await client.db().admin().ping();
    
    // Get database stats
    const dbStats = await connection.connection.db.stats();
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully connected to MongoDB!',
      dbStats: {
        db: dbStats.db,
        collections: dbStats.collections,
        objects: dbStats.objects,
        dataSize: `${(dbStats.dataSize / 1024 / 1024).toFixed(2)} MB`
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to connect to database',
        details: {
          code: error.code,
          codeName: error.codeName,
          errorLabels: error.errorLabels || []
        }
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
