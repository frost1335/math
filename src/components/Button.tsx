export default function Button({ children, disabled = false, className, onClick, type = 'button', status = 'primary' }: {
    children: React.ReactNode,
    disabled?: boolean,
    type?: 'submit' | 'button',
    className?: string,
    onClick?: () => void,
    status?: 'primary' | 'secondary'
}) {

    const theme = status === 'primary' ? 'bg-yellow-400 border-yellow-400 hover:bg-transparent hover:text-yellow-400' : 'bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600'

    return (
        <button disabled={disabled} type={type} onClick={onClick} className={`${className} ${theme} px-4 md:px-8 py-3 tracking-wide font-medium text-white rounded-tr-2xl border-2 rounded-bl-2xl shadow-lg transition-all disabled:hover:bg-red-600 disabled:hover:text-white disabled:opacity-50`}>
            {children}
        </button>
    )
};
