const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {

  return console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, nº: ${order.address.number}, AP: ${order.address.apartment}`);
};

customerInfo(order);

const orderModifier = (order) => {
    const pizzas = Object.keys(order.order.pizza);
    const drinkType = order.order.drinks.coke.type;
    order.name = 'Luiz Silva';
    order.payment.total = 50
    return console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinkType} é R$ ${order.payment.total},00.`);
};

orderModifier(order);
