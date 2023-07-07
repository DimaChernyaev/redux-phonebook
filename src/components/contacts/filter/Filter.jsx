// import PropTypes from 'prop-types';
import { SearchInput, SearchLabel, SearchTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/actions';
import { getStateFilter } from 'components/redux/selectors';

const Filter = () => {
  const { filter } = useSelector(getStateFilter);
  const dispatch = useDispatch();

  function onSearch(event) {
    dispatch(setFilter(event.target.value));
    console.log(filter);
  }

  return (
    <SearchLabel>
      <SearchTitle>Search</SearchTitle>
      <SearchInput
        type="search"
        name="filter"
        value={filter}
        onChange={onSearch}
      ></SearchInput>
    </SearchLabel>
  );
};

export default Filter;
