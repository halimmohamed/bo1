import React, { useState } from 'react';
import { Save, Bookmark } from 'lucide-react';

export const AdvancedSettingsSection: React.FC = () => {
  const [profileName, setProfileName] = useState('');
  const [savedProfiles, setSavedProfiles] = useState(['Default Profile', 'High Accuracy', 'Fast Processing']);
  const [settings, setSettings] = useState({
    svm: {
      C: 1.0,
      kernel: 'rbf',
      gamma: 'scale',
      degree: 3
    },
    randomForest: {
      n_estimators: 100,
      max_depth: 10,
      min_samples_split: 2,
      min_samples_leaf: 1
    },
    xgboost: {
      n_estimators: 100,
      learning_rate: 0.1,
      max_depth: 6,
      subsample: 1.0
    }
  });

  const handleSettingChange = (algorithm: string, parameter: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [algorithm]: {
        ...prev[algorithm],
        [parameter]: value
      }
    }));
  };

  const saveProfile = () => {
    if (profileName.trim()) {
      setSavedProfiles(prev => [...prev, profileName.trim()]);
      setProfileName('');
    }
  };

  return (
    <div className="space-y-10">
      {/* SVM Settings */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">SVM Configuration</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Regularization Parameter (C)
            </label>
            <input
              type="number"
              value={settings.svm.C}
              onChange={(e) => handleSettingChange('svm', 'C', parseFloat(e.target.value))}
              step="0.001"
              min="0.001"
              max="100"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Kernel Function
            </label>
            <select
              value={settings.svm.kernel}
              onChange={(e) => handleSettingChange('svm', 'kernel', e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            >
              <option value="linear">Linear</option>
              <option value="poly">Polynomial</option>
              <option value="rbf">RBF</option>
              <option value="sigmoid">Sigmoid</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gamma Parameter
            </label>
            <select
              value={settings.svm.gamma}
              onChange={(e) => handleSettingChange('svm', 'gamma', e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            >
              <option value="scale">Scale</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Polynomial Degree
            </label>
            <input
              type="number"
              value={settings.svm.degree}
              onChange={(e) => handleSettingChange('svm', 'degree', parseInt(e.target.value))}
              min="1"
              max="10"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
        </div>
      </div>

      {/* Random Forest Settings */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Random Forest Configuration</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Number of Trees (n_estimators)
            </label>
            <input
              type="number"
              value={settings.randomForest.n_estimators}
              onChange={(e) => handleSettingChange('randomForest', 'n_estimators', parseInt(e.target.value))}
              min="10"
              max="1000"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Maximum Depth (max_depth)
            </label>
            <input
              type="number"
              value={settings.randomForest.max_depth}
              onChange={(e) => handleSettingChange('randomForest', 'max_depth', parseInt(e.target.value))}
              min="1"
              max="50"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Min Samples Split
            </label>
            <input
              type="number"
              value={settings.randomForest.min_samples_split}
              onChange={(e) => handleSettingChange('randomForest', 'min_samples_split', parseInt(e.target.value))}
              min="2"
              max="20"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Min Samples Leaf
            </label>
            <input
              type="number"
              value={settings.randomForest.min_samples_leaf}
              onChange={(e) => handleSettingChange('randomForest', 'min_samples_leaf', parseInt(e.target.value))}
              min="1"
              max="10"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
          </div>
        </div>
      </div>

      {/* Profile Management */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
          <Bookmark className="w-5 h-5" />
          Profile Management
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="Profile name"
              className="flex-1 p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70"
            />
            <button
              onClick={saveProfile}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <Save className="w-5 h-5" />
              Save
            </button>
          </div>

          <div>
            <h4 className="text-gray-300 mb-4 font-semibold">Saved Profiles:</h4>
            <div className="space-y-3">
              {savedProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                >
                  <span className="text-gray-300 font-medium">{profile}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    Load
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};