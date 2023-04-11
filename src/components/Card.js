export default function Card(props) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return (
        <div 
            className="flex flex-col gap-3 bg-slate-100 p-3 text-slate-600"
            data-testid='card'
            >
            <div className="flex items-center gap-2">
                <img
                    className="border w-8 rounded-full" 
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${props.plant.vendor_url}`}
                    alt={props.plant.vendor}
                />
                <div className="text-xs leading-tight">
                    <p><a href={props.plant.vendor_url} className="hover:text-slate-500" target="_blank" rel="noopener noreferrer">{props.plant.vendor}</a></p>
                    <p><span className="text-slate-400">Ships from</span> {props.plant.ships_from}</p>
                </div>
            </div>

            <p className="leading-tight hover:text-slate-500 text-sm">
                <a href={props.plant.listing_url} target="_blank" rel="noopener noreferrer">
                    {props.plant.name}
                </a>
            </p>

            <img 
                className="rounded" 
                src={props.plant.img} 
                alt={props.plant.name}
            />

            <div className="flex justify-between">
                <p className="bg-slate-200 py-1 px-3 rounded font-semibold text-green-900">
                    {formatter.format(props.plant.price)}
                </p>
            </div>
        </div>
    )
}