type Props = {
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}

export function Agreement({onChange}: Props) {
    return (
        <fieldset>
            <legend>利用規約の同意</legend>
            <label>
                <input type="checkbox" onChange={onChange}/>
                <a href="/tems">利用規約</a>に同意します。
            </label>
        </fieldset>
    )
}