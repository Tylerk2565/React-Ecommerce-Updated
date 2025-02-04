const InventoryCard = ({ inventory }) => {
  return (
    <div>
      <h3>{inventory.name}</h3>
      <p>{inventory.description}</p>
      <p>{inventory.price}</p>
    </div>
  );
}

export default InventoryCard;