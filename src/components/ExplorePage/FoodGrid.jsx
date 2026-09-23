import FoodCard from "../Card/FoodCard";
import FoodCardSkeleton from "../skeleton/FoodCardSkeleton";

const FoodGrid = ({ foods, loading }) => {
  // Loading State
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <FoodCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Food Grid
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodGrid;
