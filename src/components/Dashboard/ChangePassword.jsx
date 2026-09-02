const ChangePassword = () => {
    return (
        <div className="p-4 bg-white">
            <h2 className="text-xl text-slate-600 pb-5">Alterar Senha</h2>
            <form>
                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="old_password">Senha Antiga</label>
                    <input className="outline-none px-3 py-1 border rounded-md text-slate-600"
                        type="password" id="old_password" name="old_password" placeholder="Senha Antiga" />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="confirm_password">Senha Nova</label>
                    <input className="outline-none px-3 py-1 border rounded-md text-slate-600"
                           type="password" id="confirm_password" name="confirm_password" placeholder="Senha Nova" />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="old_password">Confirme a Senha</label>
                    <input className="outline-none px-3 py-1 border rounded-md text-slate-600"
                           type="password" id="old_password" name="old_password" placeholder="Confirm a Senha" />
                </div>
                <div>
                    <button className="px-8 py-2 bg-[#059473] shadow-lg hover:shadow-green-500/30 text-white rounded-md">
                        Atualizar a Senha
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword;
