import './Flat.scss';

const Flat = ({ price, name, imageUrl }) => {
  return (
    <div className="flats">
      <img className="flat-picture" src={ imageUrl } alt="" />
      <div className="flat-title">
        { name } - { price }
      </div>
    </div>
  )
}

export default Flat;
