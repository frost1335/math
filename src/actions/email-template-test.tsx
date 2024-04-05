import * as React from 'react';

interface EmailTemplateTestProps {
    name: string | null
    phone: string | null
    answers?: any
}

export const EmailTemplateTest: React.FC<Readonly<EmailTemplateTestProps>> = ({
    name,
    phone,
    answers
}) => (
    <div>
        <b>Foydalanuvchidan Ariza!</b>
        <br />
        <br />
        Foydalanuvchi Ismi:  <u>{name}</u>
        <br />
        Foydalanuvchi Tel. raqami:  <u>{phone}</u>
        <br />
        <br />
        <b>Test javoblari:</b>
        <br />
        <br />
        {answers.map((question, index) => (
            <div key={index}>
                <b>{index + 1}-Savol {`№(${question.qstNum})`}:</b> {question.title}
                <br />
                Tanlangan javob:  <u>{question.answer}</u>
                <br />
                <br />
            </div>
        ))
        }
    </div>
);