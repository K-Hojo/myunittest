import React, { useState } from "react";
import { DeliveryAddressInput } from "./DeliveryAddressInput";
import { AddressOption } from "./Form";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

export function DeliveryAddressWithPastAddress({
  options,
}: {
  options: AddressOption[];
}) {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined
  );

  return (
    <>
      <RegisterDeliveryAddress onChange={setRegisterNew} />
      {registerNew ? (
        <DeliveryAddressInput title="新しいお届け先" />
      ) : (
        <PastDeliveryAddress
          disabled={registerNew === undefined}
          options={options}
        />
      )}
    </>
  );
}
