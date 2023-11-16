import nodemailer from "nodemailer";
import { env } from '~/config.module';
import { logger } from '~utils/logger.utils';

type typeObjectSendMail = {
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string,
    headers?: any,
}

async function sendingMail(valueSendMail: typeObjectSendMail): Promise<void> {

  const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST,
    port: parseInt(env.MAIL_PORT) ?? 2525,
    secure: false,
    requireTLS: true,
    auth: {
      user: env.MAIL_USERNAME,
      pass: env.MAIL_PASSWORD,
    },
    logger: true
  });

  const info = await transporter.sendMail(valueSendMail);

  logger.info(`Message sent: ${info.response}`);
}

export {
    typeObjectSendMail,
    sendingMail,
}