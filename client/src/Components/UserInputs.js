export const Input=({label,placeholder,type,bg})=>{
    return (
        <div className="text-sm w-full mx-10 px-0">
        <label className="text-border px-6 font-semibold">{label}</label>
        <input 
        required 
        type ={type}
        placeholder={placeholder}
        className={`w-50 text-sm mt-4 mx-2 p-4 border border-border rounded text-white ${
             bg ? 'bg-main' : "bg-dry"
        }`}
        />

       
        </div>
    )
}