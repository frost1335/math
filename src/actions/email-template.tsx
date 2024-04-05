import * as React from 'react';

interface EmailTemplateProps {
    name: string | null
    phone: string | null
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    phone,
}) => (
    <div>
        <b>Batafsil Ma`lumotlar uchun Foydalanuvchidan Ariza!</b>
        <br />
        <br />
        Foydalanuvchi Ismi:  <u>{name}</u>
        <br />
        Foydalanuvchi Tel. raqami:  <u>{phone}</u>
    </div>
);