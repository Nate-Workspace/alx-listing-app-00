const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-2xl font-bold text-indigo-600">StayFinder</div>
      <nav className="flex gap-4 flex-wrap">
        {["Rooms", "Mansion", "Countryside", "Cabin", "Apartment"].map(type => (
          <button key={type} className="text-gray-600 hover:text-indigo-600">{type}</button>
        ))}
      </nav>
      <div className="flex gap-2">
        <button className="text-sm text-gray-600 hover:text-indigo-600">Sign In</button>
        <button className="bg-indigo-600 text-white px-4 py-1 rounded text-sm">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
