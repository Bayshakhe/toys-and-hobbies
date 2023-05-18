

const Gallery = () => {
    const imgGallery = [
        {img: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1511213966740-24d719a0a814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://plus.unsplash.com/premium_photo-1664910445468-dcefda72511c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1604907178402-1e7f5ea89006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1642056446459-1f10774273f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1640461470346-c8b56497850a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1594074456536-f7c281aa6bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1531415505195-40f140d44392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1599010039134-c416d856eb39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80', alt:'Gallery Image'},
        {img: 'https://images.unsplash.com/photo-1540149678796-1a36342a1372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', alt:'Gallery Image'},
    ]
  return (
    <div className="container mx-auto my-10">
        <h2 className="font-bold text-5xl text-center mb-6 mt-10">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {
        imgGallery.map((image,i) => <div key={i}>
            <img className="border-4 border-white h-[200px]" src={image.img} alt={image.alt} />
        </div>)
      }
    </div>
    </div>
  );
};

export default Gallery;
