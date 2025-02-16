const ModuleCard = ({ module }) => {
    return (
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center w-60">
        <h4 className="text-lg font-medium text-gray-800">{module.name}</h4>
      </div>
    );
  };
  
  export default ModuleCard;
  