import React from 'react';
import { Code2, Shield, Settings, Database, BarChart3, Zap, Brain, Sliders, Upload, Target, Cog, Wrench } from 'lucide-react';
import { CollapsibleSection } from './components/CollapsibleSection';
import { ModelSelectionSection } from './components/ModelSelectionSection';
import { PreprocessingSection } from './components/PreprocessingSection';
import { DataInputSection } from './components/DataInputSection';
import { PredictionsSection } from './components/PredictionsSection';
import { TrainModelSection } from './components/TrainModelSection';
import { AdvancedSettingsSection } from './components/AdvancedSettingsSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 border-b border-amber-400/30 shadow-2xl backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  Development Mode
                </h1>
                <p className="text-gray-400 text-sm">Attack Detection System - Advanced Configuration</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-900/50 rounded-xl border border-green-500/30">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="bg-gray-800/30 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700/50">
          
          {/* Model Selection Section */}
          <CollapsibleSection 
            title="Model Selection" 
            defaultOpen={true}
            icon={<Brain className="w-6 h-6" />}
          >
            <ModelSelectionSection />
          </CollapsibleSection>

          {/* Preprocessing Section */}
          <CollapsibleSection 
            title="Preprocessing Settings"
            icon={<Sliders className="w-6 h-6" />}
          >
            <PreprocessingSection />
          </CollapsibleSection>

          {/* Data Input Section */}
          <CollapsibleSection 
            title="Data Input & Upload"
            icon={<Upload className="w-6 h-6" />}
          >
            <DataInputSection />
          </CollapsibleSection>

          {/* Predictions Section */}
          <CollapsibleSection 
            title="Predictions & Analysis"
            icon={<Target className="w-6 h-6" />}
          >
            <PredictionsSection />
          </CollapsibleSection>

          {/* Train Model Section */}
          <CollapsibleSection 
            title="Train New Model"
            icon={<Cog className="w-6 h-6" />}
          >
            <TrainModelSection />
          </CollapsibleSection>

          {/* Advanced Settings Section */}
          <CollapsibleSection 
            title="Advanced Settings"
            icon={<Wrench className="w-6 h-6" />}
          >
            <AdvancedSettingsSection />
          </CollapsibleSection>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 border-t border-gray-700/50 mt-16 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 px-3 py-2 bg-amber-900/30 rounded-lg border border-amber-500/20">
                <Database className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300 font-medium">Data Secured & Encrypted</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-900/30 rounded-lg border border-green-500/20">
                <BarChart3 className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300 font-medium">Performance: Excellent</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-900/30 rounded-lg border border-yellow-500/20">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">Speed: High</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;