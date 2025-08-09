import React, { useState } from 'react';
import { Upload, Plus, Shuffle } from 'lucide-react';

export const DataInputSection: React.FC = () => {
  const [inputMethod, setInputMethod] = useState('upload');
  const [manualData, setManualData] = useState([
    { srcip: '', sport: '', dstip: '', dsport: '', proto: '', state: '', dur: '', sbytes: '', dbytes: '' }
  ]);

  const addRow = () => {
    setManualData([...manualData, { srcip: '', sport: '', dstip: '', dsport: '', proto: '', state: '', dur: '', sbytes: '', dbytes: '' }]);
  };

  const generateRandomData = () => {
    const randomRow = {
      srcip: `192.168.1.${Math.floor(Math.random() * 255)}`,
      sport: Math.floor(Math.random() * 65535).toString(),
      dstip: `10.0.0.${Math.floor(Math.random() * 255)}`,
      dsport: Math.floor(Math.random() * 65535).toString(),
      proto: ['tcp', 'udp', 'icmp'][Math.floor(Math.random() * 3)],
      state: ['CON', 'FIN', 'INT'][Math.floor(Math.random() * 3)],
      dur: (Math.random() * 100).toFixed(2),
      sbytes: Math.floor(Math.random() * 10000).toString(),
      dbytes: Math.floor(Math.random() * 10000).toString(),
    };
    setManualData([randomRow]);
  };

  const updateManualData = (index: number, field: string, value: string) => {
    const newData = [...manualData];
    newData[index] = { ...newData[index], [field]: value };
    setManualData(newData);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 mb-8">
        {[
          { id: 'upload', label: 'Upload File' },
          { id: 'manual', label: 'Manual Input' }
        ].map((method) => (
          <button
            key={method.id}
            onClick={() => setInputMethod(method.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inputMethod === method.id
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/25'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 backdrop-blur-sm'
            }`}
          >
            {method.label}
          </button>
        ))}
      </div>

      {inputMethod === 'upload' && (
        <div className="border-2 border-dashed border-gray-600/50 rounded-xl p-12 text-center hover:border-amber-400 transition-all duration-300 bg-gray-700/20 backdrop-blur-sm hover:bg-gray-700/30">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300 mb-2 text-lg">Drag and drop your file here or click to select</p>
          <p className="text-sm text-gray-400">Supports .parquet and .csv files</p>
          <input
            type="file"
            accept=".parquet,.csv"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                // Handle file upload
                console.log('File selected:', e.target.files[0]);
              }
            }}
          />
        </div>
      )}

      {inputMethod === 'manual' && (
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={addRow}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Plus className="w-4 h-4" />
              Add Row
            </button>
            <button
              onClick={generateRandomData}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Shuffle className="w-4 h-4" />
              Random Data
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-600/30">
              <thead>
                <tr className="bg-gray-600/50">
                  <th className="p-4 text-left text-amber-400 font-semibold">srcip</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">sport</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">dstip</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">dsport</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">proto</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">state</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">dur</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">sbytes</th>
                  <th className="p-4 text-left text-amber-400 font-semibold">dbytes</th>
                </tr>
              </thead>
              <tbody>
                {manualData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-600/30 hover:bg-gray-600/20 transition-colors">
                    {Object.entries(row).map(([field, value]) => (
                      <td key={field} className="p-3">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateManualData(index, field, e.target.value)}
                          className="w-full p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all duration-200 backdrop-blur-sm"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};