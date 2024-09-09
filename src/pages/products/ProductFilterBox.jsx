const ProductFilterBox = ({ filterItem, setFilterItem, setCurrentPage }) => {
  const onChangeHandler = (e) => {
    setFilterItem(e.target.id);
    setCurrentPage(1);
  };

  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">بدون فلتر</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="men's clothing"
        />
        <label htmlFor="men's clothing">رجالي </label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="women's clothing"
        />
        <label htmlFor="women's clothing">نسائي</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="jewelery"
        />
        <label htmlFor="jewelery">مجوهرات</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          type="radio"
          name="filter"
          id="electronics"
        />
        <label htmlFor="electronics">الكترونيات</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;
