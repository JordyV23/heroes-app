import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { useForm } from "../../hooks/useForm";

export const useSearchHeroes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length < 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return {
    heroes,
    showSearch,
    showError,
    searchText,
    onSearchSubmit,
    onInputChange,
    q,
  };
};
