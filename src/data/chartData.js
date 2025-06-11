const chartData = [
  // 第一层
  {
    title: "Active",
    content: "Active metasurfaces can be tuned dynamically by external stimuli such as voltage, light, or heat."
  },
  {
    title: "Passive",
    content: "Passive metasurfaces have fixed optical properties after fabrication and cannot be reconfigured."
  },

  // 第二层
  {
    title: "Transmissive",
    content: "These metasurfaces allow light to pass through while modifying its phase, amplitude, or direction."
  },
  {
    title: "Reflective",
    content: "Reflective metasurfaces reflect incident light with controlled optical functions."
  },
  {
    title: "Combined",
    content: "Combined metasurfaces exhibit both transmission and reflection depending on polarization or wavelength."
  },

  // 第三层
  {
    title: "Linear",
    content: "Linear phase profiles produce constant angle beam deflection or shifting."
  },
  {
    title: "Parabolic",
    content: "Parabolic phase profiles are typically used in focusing applications such as flat lenses."
  },
  {
    title: "Hyperbolic",
    content: "Hyperbolic profiles can enable wavefront shaping for more advanced focusing or dispersion control."
  },
  {
    title: "Freeform or higher",
    content: "Freeform phase profiles provide flexible wavefront control for complex beam shaping."
  },

  // 第四层
  {
    title: "Meta-atom material type",
    content: "Defines whether the nanostructures are metallic or dielectric, affecting loss and response bandwidth."
  },
  {
    title: "Metallic",
    content: "Metallic meta-atoms support strong plasmonic resonances but typically have higher loss."
  },
  {
    title: "Dielectric",
    content: "Dielectric meta-atoms offer low-loss, broadband response with Mie-type resonances."
  },
  {
    title: "Meta-atom geometry",
    content: "Geometry defines how individual elements interact with light, enabling anisotropy, chirality, etc."
  },
  {
    title: "Nanopillar",
    content: "Nanopillars are vertical rods that act as phase shifters in transmissive metasurfaces."
  },
  {
    title: "Nanofin",
    content: "Nanofins are asymmetric elements used for polarization control and high-efficiency designs."
  },
  {
    title: "Nanohole",
    content: "Nanoholes are etched regions in a film used to manipulate transmission or reflection."
  },
  {
    title: "Other shapes",
    content: "Includes crosses, rings, or composite geometries for specialized functions."
  },

  // 第五层
  {
    title: "Polarization sensitivity",
    content: "Indicates whether the metasurface function depends on the polarization of the incident light."
  },
  {
    title: "Sensitive",
    content: "The device behaves differently for different polarization states (e.g. TE vs TM)."
  },
  {
    title: "Insensitive",
    content: "Device works identically regardless of light polarization, enabling broader use."
  },

  // 第六层
  {
    title: "Wave type",
    content: "Specifies the kind of wave the metasurface manipulates—most commonly light or sound."
  },
  {
    title: "Light",
    content: "Traditional optical metasurfaces operate in visible, IR, or UV spectral ranges."
  },
  {
    title: "Acoustic",
    content: "Acoustic metasurfaces control the propagation of sound waves in air or solids."
  },
  {
    title: "Bandwidth",
    content: "Describes the spectral range over which the metasurface maintains functionality."
  },
  {
    title: "Monochromatic",
    content: "Designed for a single wavelength—often high-efficiency but narrowband."
  },
  {
    title: "Broadband",
    content: "Capable of operating over a wide wavelength range with stable response."
  },
  {
    title: "Discrete wavelengths",
    content: "Functional only at several specific wavelengths—used in multi-band systems."
  },
  {
    title: "Wavelength range",
    content: "Describes the operating spectral region, e.g., visible, near-infrared, or deep IR."
  },
  {
    title: "Visible",
    content: "Wavelength range from ~400–700 nm, used in imaging and displays."
  },
  {
    title: "Near IR",
    content: "Wavelengths from ~700–2000 nm, common in telecom and sensors."
  },
  {
    title: "Deep IR",
    content: "Longer wavelengths up to 10 microns or more, used in thermal imaging or spectroscopy."
  },

  // 第七层
  {
    title: "Layer number",
    content: "Specifies how many metasurface layers are stacked—affects complexity and performance."
  },
  {
    title: "1",
    content: "A single-layer metasurface is the simplest form—thin and easier to fabricate."
  },
  {
    title: "2",
    content: "Two-layer metasurfaces allow cascaded interactions and enhanced phase control."
  },
  {
    title: "3",
    content: "Three or more layers can achieve advanced functions like achromatic response."
  },
  {
    title: "more",
    content: "Multi-layer metasurfaces are used in complex applications such as holography or polarization multiplexing."
  },
  {
    title: "Layer structure",
    content: "Describes the material stack configuration of the metasurface (e.g., MIM or all-dielectric)."
  },
  {
    title: "Metallic-Insulator-Metallic",
    content: "This stack supports strong plasmonic resonances and reflection-based designs."
  },
  {
    title: "All-dielectric",
    content: "Low-loss, transparent structure composed entirely of dielectric layers."
  },
  {
    title: "More structures",
    content: "Includes hybrid, anisotropic, or gradient structures tailored for specific responses."
  }
];

export default chartData;
