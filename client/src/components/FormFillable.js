
const SelectObject = ({ label, ...other }) => (
    <div className="container">
        <div className="row">
            <div className="col-3">
                <label htmlFor={`${label}-select`}><b>{label}</b></label>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
                <select value={other?.selected} className="form-select" name="" id="" onChange={(e) => other?.onChange(e)}>
                    {other.options.map((e, i) => (
                        <option value={e} key={`${i}${e}`}>{e}</option>
                    ))}
                </select>
            </div>
            <div className="col">
                {other?.removable && <input type="button" value="-" onClick={other?.removeItem} />}
            </div>
        </div>
    </div>
)

const TextObject = ({ label, ...other }) => (
    <div className="container">
        <div className="row">
            <div className="col-3">
                <label htmlFor={`${label}-text`}>{label}</label>
            </div>
            <div className="col">
                <input type="text" id={`${label}-text`} onChange={other?.onChange}></input>
            </div>
        </div>
        {other?.removable &&
            <div className="col">
                <input type="button" value="-" onClick={other.removeItem} />
            </div>
        }
    </div>
)

const CheckObject = ({ label, options, ...other }) => (
    <div className="container">
        <div className="row">
            <div className="col-3">
                <label htmlFor={`${label}-checkbox`}><b>{label}</b></label>
            </div>
        </div>
        <div className="row">
            <div className="container">
                {options.map((i, e) => {
                    return (
                        <div className="row" key={`${i}${e}`}>
                            <div className="col-3">
                                <label htmlFor={`${i}-checkbox`}>{i}</label>
                            </div>
                            <div className="col">
                                <input type="checkbox" value={i} id={`${i}-checkbox`} onChange={other?.onChange} />
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
        {other?.removable &&
            <div className="col">
                <input type="button" value="-" onClick={other.removeItem} />
            </div>
        }
    </div>
)

export { TextObject };
export { SelectObject }
export { CheckObject }