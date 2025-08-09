import React, { useState } from 'react';
import { Play, Download, Settings } from 'lucide-react';

export const TrainModelSection: React.FC = () => {
  const [selectedColumns, setSelectedColumns] = useState(['srcip', 'dstip', 'proto', 'state']);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Random Forest');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [trainingComplete, setTrainingComplete] = useState(false);

  const availableColumns = [
    'srcip', 'sport', 'dstip', 'dsport', 'proto', 'state', 'dur', 'sbytes', 'dbytes', 'sttl', 'dttl'
  ];

  const algorithms = [
    'Random Forest', 'XGBoost', 'SVM', 'Logistic Regression', 'Decision Tree', 'KNN'
  ];

  const handleColumnToggle = (column: string) => {
    setSelectedColumns(prev =>
      prev.includes(column)
        ? prev.filter(col => col !== column)
        : [...prev, column]
    );
  };

  const handleTrainModel = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    setTrainingComplete(false);

    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setTrainingComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const hyperparameters = {
    'Random Forest': [
      { name: 'n_estimators', label: 'عدد الأشجار', type: 'number', value: 100, min: 10, max: 1000 },
      { name: 'max_depth', label: 'العمق الأقصى', type: 'number', value: 10, min: 1, max: 50 }
    ],
    'SVM': [
      { name: 'C', label: 'معامل التنظيم', type: 'number', value: 1.0, min: 0.001, max: 100, step: 0.001 },
      { name: 'kernel', label: 'النواة', type: 'select', value: 'rbf', options: ['linear', 'poly', 'rbf', 'sigmoid'] }
    ],
    'XGBoost': [
      { name: 'n_estimators', label: 'عدد المقدرات', type: 'number', value: 100, min: 10, max: 1000 },
      { name: 'learning_rate', label: 'معدل التعلم', type: 'number', value: 0.1, min: 0.001, max: 1, step: 0.001 }
    ]
  };

  return (
    <div className="space-y-10">
      {/* Column Selection */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Select Training Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {availableColumns.map((column) => (
            <label key={column} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-600/20 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={selectedColumns.includes(column)}
                onChange={() => handleColumnToggle(column)}
                className="w-5 h-5 rounded border-2 border-gray-600 text-amber-600 focus:ring-amber-400 focus:ring-2 bg-gray-700 transition-all duration-200"
              />
              <span className="text-gray-300 font-mono text-sm">{column}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Algorithm Selection */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Select Algorithm</h3>
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
          className="w-full max-w-md p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-700/70"
        >
          {algorithms.map((algorithm) => (
            <option key={algorithm} value={algorithm}>
              {algorithm}
            </option>
          ))}
        </select>
      </div>

      {/* Hyperparameters */}
      {hyperparameters[selectedAlgorithm] && (
        <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
          <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
            <Settings className="w-5 h-5" />
            Hyperparameters
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {hyperparameters[selectedAlgorithm].map((param) => (
              <div key={param.name}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {param.label}
                </label>
                {param.type === 'select' ? (
                  <select
                    defaultValue={param.value}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-700/70"
                  >
                    {param.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    defaultValue={param.value}
                    min={param.min}
                    max={param.max}
                    step={param.step || 1}
                    className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-700/70"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Training Controls */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Train Model</h3>
        
        <div className="space-y-6">
          <button
            onClick={handleTrainModel}
            disabled={isTraining || selectedColumns.length === 0}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-500 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 disabled:transform-none disabled:shadow-none"
          >
            <Play className="w-5 h-5" />
            {isTraining ? 'Training in Progress...' : 'Start Training'}
          </button>

          {isTraining && (
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Training Progress</span>
                <span>{trainingProgress}%</span>
              </div>
              <div className="w-full bg-gray-600/50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-600 to-amber-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-amber-500/50"
                  style={{ width: `${trainingProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {trainingComplete && (
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 border border-green-500/50 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-green-400 font-bold text-lg mb-4">Training Completed Successfully!</h4>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95.2%</div>
                  <div className="text-sm text-gray-400 mt-1">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">93.8%</div>
                  <div className="text-sm text-gray-400 mt-1">Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">94.5%</div>
                  <div className="text-sm text-gray-400 mt-1">Recall</div>
                </div>
              </div>
              <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25">
                <Download className="w-4 h-4" />
                Save Model (.pkl)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};