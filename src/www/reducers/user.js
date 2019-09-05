const DEFAULT = {
  id: "",
  email: "",
  clientId: "",
  lastName: "",
  firstName: "Visitante!",
  scopes: [],
  customData: {
    vendorId: "",
    customerId: ""
  }
};

export default function(user = DEFAULT) {
  return user;
}
