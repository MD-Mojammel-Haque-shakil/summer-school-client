

const SIngleClass = ({item}) => {
    const {photo, name, instructorName,
        seats, price} = item
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Class Name: {name}</h2>
    <p>Instructor Name: {instructorName}</p>
    <p>Available Seats: {seats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-info">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SIngleClass;