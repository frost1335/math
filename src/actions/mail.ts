'use server'

import { EmailTemplate } from './email-template';
import { EmailTemplateTest } from './email-template-test';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async ({ name, phone }: { name: string | null, phone: string | null }) => {
    const { data, error } = await resend.emails.send(
        {
            from: 'onboarding@resend.dev',
            to: 'prepuz.notifications@gmail.com',
            subject: 'Innovation Matematika',
            react: EmailTemplate({ name, phone }),
            text: ''
        }
    );

    if (error) {
        throw error
    }

    return data
};

export const sendMailTest = async ({ name, phone, answers }: { name: string | null, phone: string | null, answers?: any }) => {
    const { data, error } = await resend.emails.send(
        {
            from: 'onboarding@resend.dev',
            to: 'prepuz.notifications@gmail.com',
            subject: 'Innovation Matematika',
            react: EmailTemplateTest({ name, phone, answers }),
            text: ''
        }
    );

    if (error) {
        throw error
    }

    return data
};