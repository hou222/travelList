import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function hundleItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function hundleDeleteIem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function hundleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function hundleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={hundleItems} />
      <PackingList
        items={items}
        onDeleteItem={hundleDeleteIem}
        onToggleItem={hundleToggleItem}
        onClearList={hundleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
