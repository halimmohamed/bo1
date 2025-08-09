import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const ModelSelectionSection: React.FC = () => {
  const [binaryModel, setBinaryModel] = useState('SVM');
  const [attackModel, setAttackModel] = useState('Random Forest');
  const [isReloading, setIsReloading] = useState(false);

  const binaryModels = ['SVM', 'Logistic Regression', 'Decision Tree', 'KNN'];
  const attackModels = ['Random Forest', 'XGBoost', 'Gradient Boosting', 'Naive Bayes'];

  const handleReloadModels = () => {
    setIsReloading(true);
    setTimeout(() => setIsReloading(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Binary Classification Model
          </label>
          <select
            value={binaryModel}
            onChange={(e) => setBinaryModel(e.target.value)}
            className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-700/70"
          >
            {binaryModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Attack Type Classification Model
          </label>
          <select
            value={attackModel}
            onChange={(e) => setAttackModel(e.target.value)}
            className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-700/70"
          >
            {attackModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleReloadModels}
        disabled={isReloading}
        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 disabled:from-amber-800 disabled:to-amber-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 disabled:transform-none disabled:shadow-none"
      >
        <RefreshCw className={`w-5 h-5 ${isReloading ? 'animate-spin' : ''}`} />
        {isReloading ? 'Reloading Models...' : 'Reload Models'}
      </button>
    </div>
  );
};