export async function postMeals(meals) {
  const res = await fetch(
    "https://react-redefined-default-rtdb.firebaseio.com/meals.json",
    {
      method: "POST",
      body: JSON.stringify(meals),
      headers: {
        "Content-Type": "Application/json",
      },
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    console.log("data", data);
  }
}

export async function getMeals() {
  const res = await fetch(
    "https://react-redefined-default-rtdb.firebaseio.com/meals.json"
  );
  const data = await res.json();
  return data;
}
