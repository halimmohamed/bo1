import React, { useState } from 'react';

export const PreprocessingSection: React.FC = () => {
  const [useStandardScaler, setUseStandardScaler] = useState(true);
  const [encodingType, setEncodingType] = useState('Label Encoding');
  const [trainTestSplit, setTrainTestSplit] = useState(80);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30">
          <h4 className="text-lg font-semibold text-amber-400 mb-4">Scaling Options</h4>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={useStandardScaler}
              onChange={(e) => setUseStandardScaler(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-600 text-amber-600 focus:ring-amber-400 focus:ring-2 bg-gray-700 transition-all duration-200"
            />
            <span className="text-gray-300">Enable Standard Scaler</span>
          </label>
        </div>

        <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <h4 className="text-lg font-semibold text-amber-400 mb-4">Encoding Type</h4>
          </label>
          <div className="space-y-2">
            {['Label Encoding', 'One-Hot Encoding'].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="encoding"
                  value={type}
                  checked={encodingType === type}
                  onChange={(e) => setEncodingType(e.target.value)}
                  className="w-5 h-5 text-amber-600 border-2 border-gray-600 focus:ring-amber-400 focus:ring-2 bg-gray-700 transition-all duration-200"
                />
                <span className="text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30">
        <h4 className="text-lg font-semibold text-amber-400 mb-4">Train/Test Split</h4>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Training Data Ratio: {trainTestSplit}%
        </label>
        <input
          type="range"
          min="60"
          max="90"
          value={trainTestSplit}
          onChange={(e) => setTrainTestSplit(Number(e.target.value))}
          className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>60%</span>
          <span>90%</span>
        </div>
      </div>
    </div>
  );
};