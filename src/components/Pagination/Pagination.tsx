import './Pagination.css';

const alphabetLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__letters">
        {alphabetLetters.map((letter) => (
          <li key={letter} className="pagination__letter">
            <a data-testid={letter} href={`/${letter}`}>
              {letter}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
