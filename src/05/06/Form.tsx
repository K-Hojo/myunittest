import { useId } from "react";
import { DeliveryAddressWithPastAddress } from "./DeliveryAddressWithPastAddress";
import { DeliveryAddressInput } from "./DeliveryAddressInput";
import { ContactNumber } from "./ContactNumber";

export type AddressOption = React.ComponentProps<"option"> & { id: string };
type Props = {
  deliveryAddresses?: AddressOption[];
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export function Form({ deliveryAddresses, onSubmit }: Props) {
  const headigId = useId();
  return (
    <form onSubmit={onSubmit} aria-labelledby={headigId}>
      <h2 id={headigId}>お届け先情報の入力</h2>
      <ContactNumber />
      {deliveryAddresses?.length ? (
        <DeliveryAddressWithPastAddress options={deliveryAddresses} />
      ) : (
        <DeliveryAddressInput />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  );
}
