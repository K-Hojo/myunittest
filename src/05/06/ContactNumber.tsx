export function ContactNumber() {
  return (
    <fieldset>
      <legend>連絡先</legend>
      <div>
        <label>
          電話番号
          <input type="tel" name="phoneNumber" />
        </label>
      </div>
      <div>
        <label>
          お名前
          <input type="text" name="name" />
        </label>
      </div>
    </fieldset>
  );
}
