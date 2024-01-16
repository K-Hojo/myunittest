import { AddressOption } from "./Form";

export function PastDeliveryAddress({
  disabled,
  options,
}: {
  disabled?: boolean;
  options: AddressOption[];
}) {
  return (
    <fieldset disabled={disabled}>
      <legend>過去のお届け先</legend>
      <select name="pastDeliveryAddress">
        {options.map(({ id, ...opt }) => (
          <option key={id} {...opt} />
        ))}
      </select>
    </fieldset>
  );
}
