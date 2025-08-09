import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, BarChart3, PieChart } from 'lucide-react';

export const PredictionsSection: React.FC = () => {
  const [prediction, setPrediction] = useState<'normal' | 'attack'>('attack');
  const [attackType, setAttackType] = useState('DDoS');
  const [confidence, setConfidence] = useState(92.5);

  // Mock data for visualizations
  const confusionMatrix = [
    [45, 3],
    [2, 50]
  ];

  const classificationReport = [
    { class: 'Normal', precision: 0.96, recall: 0.94, f1Score: 0.95 },
    { class: 'Attack', precision: 0.94, recall: 0.96, f1Score: 0.95 }
  ];

  const distributionData = [
    { type: 'Normal', count: 45, color: 'bg-green-500' },
    { type: 'DDoS', count: 25, color: 'bg-red-500' },
    { type: 'Port Scan', count: 15, color: 'bg-orange-500' },
    { type: 'Brute Force', count: 15, color: 'bg-purple-500' }
  ];

  return (
    <div className="space-y-10">
      {/* Prediction Result */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
          {prediction === 'normal' ? <Shield className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
          Prediction Results
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/30 transition-all duration-300">
            <div className={`text-2xl font-bold ${prediction === 'normal' ? 'text-green-400' : 'text-red-400'}`}>
              {prediction === 'normal' ? 'Normal' : 'Attack'}
            </div>
            <div className="text-sm text-gray-400 mt-2">Classification</div>
          </div>
          
          {prediction === 'attack' && (
            <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/30 transition-all duration-300">
              <div className="text-2xl font-bold text-orange-400">{attackType}</div>
              <div className="text-sm text-gray-400 mt-2">Attack Type</div>
            </div>
          )}
          
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/30 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-400">{confidence}%</div>
            <div className="text-sm text-gray-400 mt-2">Confidence</div>
          </div>
        </div>
      </div>

      {/* Confusion Matrix */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Confusion Matrix</h3>
        <div className="grid grid-cols-2 gap-3 max-w-md">
          {confusionMatrix.flat().map((value, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-center font-bold text-lg transition-all duration-300 hover:scale-105 ${
                (index === 0 || index === 3) 
                  ? 'bg-gradient-to-br from-green-600 to-green-500 shadow-lg shadow-green-500/25' 
                  : 'bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-500/25'
              }`}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-4 max-w-md">
          <span>Normal</span>
          <span>Attack</span>
        </div>
      </div>

      {/* Classification Report */}
      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-6">Classification Report</h3>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-600/50">
                <th className="p-4 text-left text-amber-400 font-semibold">Class</th>
                <th className="p-4 text-left text-amber-400 font-semibold">Precision</th>
                <th className="p-4 text-left text-amber-400 font-semibold">Recall</th>
                <th className="p-4 text-left text-amber-400 font-semibold">F1-Score</th>
              </tr>
            </thead>
            <tbody>
              {classificationReport.map((item, index) => (
                <tr key={index} className="border-t border-gray-600/30 hover:bg-gray-600/20 transition-colors">
                  <td className="p-4 text-gray-300 font-medium">{item.class}</td>
                  <td className="p-4 text-gray-300">{item.precision.toFixed(2)}</td>
                  <td className="p-4 text-gray-300">{item.recall.toFixed(2)}</td>
                  <td className="p-4 text-gray-300">{item.f1Score.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
          <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
            <BarChart3 className="w-5 h-5" />
            Prediction Distribution
          </h3>
          <div className="space-y-4">
            {distributionData.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-600/20 transition-colors">
                <div className={`w-5 h-5 rounded-full ${item.color} shadow-lg`}></div>
                <span className="text-gray-300 flex-1">{item.type}</span>
                <span className="text-white font-bold text-lg">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-600/30">
          <h3 className="text-xl font-semibold text-amber-400 mb-6 flex items-center gap-3">
            <PieChart className="w-5 h-5" />
            Percentage Distribution
          </h3>
          <div className="space-y-4">
            {distributionData.map((item, index) => {
              const total = distributionData.reduce((sum, d) => sum + d.count, 0);
              const percentage = ((item.count / total) * 100).toFixed(1);
              return (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-600/20 transition-colors">
                  <div className={`w-5 h-5 rounded-full ${item.color} shadow-lg`}></div>
                  <span className="text-gray-300 flex-1">{item.type}</span>
                  <span className="text-white font-bold text-lg">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};