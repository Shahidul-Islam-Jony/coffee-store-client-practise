

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

    }

    return (
        <div className="max-w-7xl mx-auto bg-[#F4F3F0] p-24">
            <h1 className="text-5xl text-center mb-8">Add New Coffee</h1>
            <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="">
                            <input type="text" name="supplier" placeholder="Enter Coffee supplier" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="Enter Coffee category" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered rounded-md w-full" />
                        </label>
                    </div>

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="">
                        <input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered rounded-md w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15]" />

            </form>
        </div>
    );
};

export default AddCoffee;