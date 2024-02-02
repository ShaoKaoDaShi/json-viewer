const className = (options:Record<string, boolean>)=>{
  return (Reflect.ownKeys(options)as string[]).filter(key=>{
    return options[key];
  }).join(' ');
}

export default className;