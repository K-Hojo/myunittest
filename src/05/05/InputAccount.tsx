export function InputAccount() {
    return (
        <fieldset>
            <legend>アカウント情報</legend>
            <div>
                <label>
                    メールアドレス
                    <input type="text" placeholder="example@test.com"/>
                </label>
            </div>
            <div>
                <label>
                    パスワード
                    <input type="password" placeholder="9文字以上で入力"/>
                </label>
            </div>
        </fieldset>
    )
}