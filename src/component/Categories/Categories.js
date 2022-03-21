

import './Categories.css';

export const Categories = function () {
    return (
      <div className="categories">
          <select name="categories" id="categories-select">
          <option value="">---choose a value---</option>
                <option value="figurine">Figurines</option>
                <option value="poster">Posters</option>
                <option value="autre">Autres</option>
          </select>
      </div>
    );
}