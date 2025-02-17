const jsonData=
{
  "orders": [
    {
      "orderId": "ORD12345",
      "customer": { "id": 101, "name": "John Doe" },
      "totalAmount": 399.97,
      "paymentStatus": "Paid",
      "shipping": { "method": "Express" },
      "orderDate": "2024-02-10T14:30:00Z"
    },
    {
      "orderId": "ORD67890",
      "customer": { "id": 102, "name": "Alice Smith" },
      "totalAmount": 1179.97,
      "paymentStatus": "Pending",
      "shipping": { "method": "Standard" },
      "orderDate": "2024-02-09T10:15:00Z"
    },
    {
      "orderId": "ORD78901",
      "customer": { "id": 103, "name": "Michael Johnson" },
      "totalAmount": 249.99,
      "paymentStatus": "Paid",
      "shipping": { "method": "Express" },
      "orderDate": "2024-02-08T16:45:00Z"
    },
    {
      "orderId": "ORD89012",
      "customer": { "id": 104, "name": "Emma Williams" },
      "totalAmount": 899.50,
      "paymentStatus": "Pending",
      "shipping": { "method": "Same Day Delivery" },
      "orderDate": "2024-02-07T09:30:00Z"
    },
    {
      "orderId": "ORD90123",
      "customer": { "id": 105, "name": "David Brown" },
      "totalAmount": 350.75,
      "paymentStatus": "Paid",
      "shipping": { "method": "Standard" },
      "orderDate": "2024-02-06T18:20:00Z"
    },
    {
      "orderId": "ORD11234",
      "customer": { "id": 106, "name": "Sophia Martinez" },
      "totalAmount": 679.25,
      "paymentStatus": "Pending",
      "shipping": { "method": "Express" },
      "orderDate": "2024-02-05T12:10:00Z"
    },
    {
      "orderId": "ORD22345",
      "customer": { "id": 107, "name": "Liam Anderson" },
      "totalAmount": 120.99,
      "paymentStatus": "Paid",
      "shipping": { "method": "Standard" },
      "orderDate": "2024-02-04T08:45:00Z"
    }
  ]
}; 

 


const tableBody = document.getElementById("order-table-body");

jsonData.orders.reverse().forEach(order => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${order.orderId}</td>
    <td>${order.customer.name}</td>
    <td>${order.totalAmount.toFixed(2)}</td>
    <td>${order.paymentStatus}</td>
    <td>${order.shipping.method}</td>
    <td>${new Date(order.orderDate).toLocaleString()}</td>
  `;
  tableBody.appendChild(row);
});
