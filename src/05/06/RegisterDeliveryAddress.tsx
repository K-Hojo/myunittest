export function RegisterDeliveryAddress({
  onChange,
}: {
  onChange: (flag: boolean) => void;
}) {
  return (
    <fieldset>
      <legend>新しいお届け先を登録しますか？</legend>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={0}
          onChange={() => {
            onChange(false);
          }}
        />
        いいえ
      </label>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={1}
          onChange={() => {
            onChange(true);
          }}
        />
        はい
      </label>
    </fieldset>
  );
}
