import { Queue, Worker } from 'bullmq';
import { connection } from './ioredis.helper';
import { logger } from '~utils/logger.utils';


// Reuse the ioredis instance

async function addJobs() {
  const myQueue = new Queue('myqueue', { connection });
  await myQueue.add('myJobName', { foo: 'bar' });
}

async function myWorker () {
    const worker = new Worker('myqueue', async job => {
        // Will print { foo: 'bar'} for the first job
        // and { qux: 'baz' } for the second.
        logger.info(job.data);
    }, { connection });
    
    worker.on('completed', job => {
        logger.success(`${job.id} has completed!`);
    });
      
    worker.on('failed', (job: any, err) => {
        logger.error(`${job.id} has failed with ${err.message}`);
    });
} 

export {
    addJobs,
    myWorker,
};