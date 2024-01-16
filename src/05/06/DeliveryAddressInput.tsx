export function DeliveryAddressInput({ title = "お届け先" }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label>
          郵便番号
          <input type="text" name="postalCode" placeholder="222-2222" />
        </label>
        <label>
          都道府県
          <input type="text" name="prefecture" placeholder="東京都" />
        </label>
        <label>
          市区町村
          <input
            type="text"
            name="municipalities"
            placeholder="またたび区肉球町"
          />
        </label>
        <label>
          番地番号
          <input type="text" name="streetNumber" placeholder="222-22" />
        </label>
      </div>
    </fieldset>
  );
}
