const getPanelOrder = (originalPanelOrder) => ['tabs', ...originalPanelOrder.filter(p => p !== 'tabs')]
