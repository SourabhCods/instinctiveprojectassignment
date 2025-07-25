import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.camera.createMany({
    data: [
      { name: 'camera-1', location: 'Shop Floor A' },
      { name: 'camera-2', location: 'Vault' },
      { name: 'camera-3', location: 'Main Gate' },
      { name: 'camera-4', location: 'Billing Counter' }
    ],
  });

  await prisma.incident.createMany({
    data: [
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T09:10:00Z'),
        tsEnd: new Date('2025-07-21T09:25:00Z'),
        thumbnailUrl: 'https://ars.els-cdn.com/content/image/1-s2.0-S0893608020303361-gr6.jpg',
        cameraId: 1,
      },
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T10:15:00Z'),
        tsEnd: new Date('2025-07-21T10:30:00Z'),
        thumbnailUrl: 'https://images.timesnownews.com/thumb/msid-151999221,thumbsize-32990,width-1280,height-720,resizemode-75/151999221.jpg',
        cameraId: 2,
      },
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T11:12:00Z'),
        tsEnd: new Date('2025-07-21T11:47:00Z'),
        thumbnailUrl: 'https://www.shutterstock.com/shutterstock/videos/29424535/thumb/7.jpg?ip=x480',
        cameraId: 3,
      },
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-21T13:00:00Z'),
        tsEnd: new Date('2025-07-21T13:37:00Z'),
        thumbnailUrl: 'https://substackcdn.com/image/fetch/$s_!lHeP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc557d8e2-5479-4403-b47b-b8b5fe19f856_682x385.png',
        cameraId: 4,
      },
      {
        type: 'Face Recognized',
        tsStart: new Date('2025-07-21T15:40:00Z'),
        tsEnd: new Date('2025-07-21T16:00:00Z'),
        thumbnailUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQH-MXGGW77gwA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684997348174?e=2147483647&v=beta&t=ZJrqfMcFzwmbVWmAjHyUWezE8sW5kxgboECF3OeDsDM',
        cameraId: 1,
      },
      {
        type: 'Face Recognized',
        tsStart: new Date('2025-07-21T14:20:00Z'),
        tsEnd: new Date('2025-07-21T15:00:00Z'),
        thumbnailUrl: 'https://www.india.com/wp-content/uploads/2015/10/CCTVFinal.jpg',
        cameraId: 2,
      },
      {
        type: 'Face Recognized',
        tsStart: new Date('2025-07-21T17:07:00Z'),
        tsEnd: new Date('2025-07-21T17:19:00Z'),
        thumbnailUrl: 'https://media.istockphoto.com/id/1990843340/video/young-couple-shopping-in-a-convenience-store.jpg?s=640x640&k=20&c=2Fco2pBaJgtvoYePoFuAxGrFB0udkDJsap6-w_eVzt4=',
        cameraId: 3,
      },
      {
        type: 'Face Recognized',
        tsStart: new Date('2025-07-21T20:20:00Z'),
        tsEnd: new Date('2025-07-21T20:50:00Z'),
        thumbnailUrl: 'https://media.gettyimages.com/id/1995820194/video/young-woman-shoplifting-in-a-convenience-store.jpg?s=640x640&k=20&c=bnYZCFe7SNt_iEEpJsFmeiy4HFE-7_d91-DSs7Atg3Y=',
        cameraId: 4,
      },
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T22:09:00Z'),
        tsEnd: new Date('2025-07-21T23:05:00Z'),
        thumbnailUrl: 'https://media.istockphoto.com/id/826047116/video/house-robbery-robber-break-door-lock-and-entering-building.jpg?s=640x640&k=20&c=MP9emTwFjqPKLpT58sViCvQr9SNKDoCIhyyiCjuUPEo=',
        cameraId: 1,
      },
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T23:00:00Z'),
        tsEnd: new Date('2025-07-21T23:45:00Z'),
        thumbnailUrl: 'https://media.istockphoto.com/id/183991278/photo/burglary-crime-burglar-opening-a-door.jpg?s=612x612&w=0&k=20&c=Z5uTuw8YYbtF0rK5iJwGhQa9xLntnm-YNt3USUa7cUs=',
        cameraId: 2,
      },
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T12:01:00Z'),
        tsEnd: new Date('2025-07-21T12:27:00Z'),
        thumbnailUrl: 'https://media.gettyimages.com/id/1995820194/video/young-woman-shoplifting-in-a-convenience-store.jpg?s=640x640&k=20&c=bnYZCFe7SNt_iEEpJsFmeiy4HFE-7_d91-DSs7Atg3Y=',
        cameraId: 3,
      },
      {
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-21T19:53:00Z'),
        tsEnd: new Date('2025-07-21T20:00:00Z'),
        thumbnailUrl: 'https://images.indianexpress.com/2023/06/theft-failure-Australia-.jpg',
        cameraId: 4,
      },

      
    ],
  });
}

main()
  .then(() => console.log('Seeding done!'))
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
