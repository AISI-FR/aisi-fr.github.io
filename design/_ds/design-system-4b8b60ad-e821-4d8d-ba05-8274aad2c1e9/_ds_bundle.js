/* @ds-bundle: {"format":4,"namespace":"DesignSystem_4b8b60","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e7ad6845962f","components/core/Button.jsx":"2b9aa09fc444","components/core/Card.jsx":"69781fd6a40e","components/core/IconButton.jsx":"916fb0f8d7a7","components/core/Tag.jsx":"fba781b71190","components/feedback/Alert.jsx":"ebb3806e0f36","components/feedback/Dialog.jsx":"818399890d65","components/feedback/Tooltip.jsx":"a355567ad895","components/forms/Checkbox.jsx":"201bc7b15096","components/forms/Input.jsx":"6ea12353c279","components/forms/Radio.jsx":"160eca0dfa94","components/forms/Select.jsx":"23566cf9ed71","components/forms/Switch.jsx":"e4dd371b964f","components/navigation/Tabs.jsx":"3bd8c57d4b6f","ui_kits/website/Chrome.jsx":"2a08df45adf4","ui_kits/website/ContactPage.jsx":"1875604938be","ui_kits/website/HomePage.jsx":"e286eb94e66f","ui_kits/website/ServicesPage.jsx":"c38c4fedadce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_4b8b60 = window.DesignSystem_4b8b60 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)'
  },
  blue: {
    bg: 'var(--aisi-blue-30)',
    fg: 'var(--aisi-navy)'
  },
  orange: {
    bg: 'var(--aisi-orange-30)',
    fg: 'var(--color-accent-hover)'
  },
  success: {
    bg: '#d7f0e3',
    fg: 'var(--color-success)'
  },
  danger: {
    bg: '#f8dede',
    fg: 'var(--color-danger)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '3px 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--fs-sm)',
    height: 32
  },
  md: {
    padding: '9px 18px',
    fontSize: 'var(--fs-body)',
    height: 40
  },
  lg: {
    padding: '12px 24px',
    fontSize: 'var(--fs-body-lg)',
    height: 48
  }
};
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--fw-semibold)',
  lineHeight: 1,
  borderRadius: 'var(--radius-pill)',
  border: '1.5px solid transparent',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-inverse)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--text-inverse)'
  },
  secondary: {
    background: 'var(--aisi-navy)',
    color: 'var(--text-inverse)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--aisi-navy)',
    borderColor: 'var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--aisi-navy)'
  }
};
const hoverBg = {
  primary: 'var(--color-primary-hover)',
  accent: 'var(--color-accent-hover)',
  secondary: '#17406b',
  outline: 'var(--surface-subtle)',
  ghost: 'var(--surface-subtle)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sz = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const style = {
    ...base,
    ...sz,
    ...v,
    width: fullWidth ? '100%' : undefined,
    ...(hover && !disabled ? {
      background: hoverBg[variant]
    } : null),
    ...(active && !disabled ? {
      transform: 'translateY(1px) scale(0.99)'
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : null)
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'var(--space-6)',
  interactive = false,
  accent = null,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    borderTop: accent ? '3px solid ' + accentColor(accent) : undefined,
    boxShadow: hover && interactive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    padding,
    transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
    transform: hover && interactive ? 'translateY(-2px)' : 'none',
    cursor: interactive ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false)
  }, rest), children);
}
function accentColor(a) {
  if (a === 'blue') return 'var(--aisi-blue)';
  if (a === 'orange') return 'var(--aisi-orange)';
  if (a === 'navy') return 'var(--aisi-navy)';
  return a;
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: '#fff',
      borderColor: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--aisi-navy)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--aisi-navy)',
      borderColor: 'transparent'
    }
  };
  const hoverBg = {
    solid: 'var(--color-primary-hover)',
    outline: 'var(--surface-subtle)',
    ghost: 'var(--surface-subtle)'
  };
  const v = variants[variant] || variants.ghost;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid ' + v.borderColor,
    background: hover && !disabled ? hoverBg[variant] : v.background,
    color: v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove = null,
  tone = 'blue',
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--aisi-blue-30)',
      fg: 'var(--aisi-navy)'
    },
    orange: {
      bg: 'var(--aisi-orange-30)',
      fg: 'var(--color-accent-hover)'
    },
    neutral: {
      bg: 'var(--gray-100)',
      fg: 'var(--gray-700)'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: onRemove ? '4px 6px 4px 12px' : '4px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.4
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Retirer",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: t.fg,
      padding: 2,
      borderRadius: '50%',
      lineHeight: 0,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  info: {
    bar: 'var(--aisi-blue)',
    bg: 'var(--aisi-blue-30)',
    icon: 'info'
  },
  success: {
    bar: 'var(--color-success)',
    bg: '#d7f0e3',
    icon: 'check'
  },
  warning: {
    bar: 'var(--aisi-orange)',
    bg: 'var(--aisi-orange-30)',
    icon: 'alert'
  },
  danger: {
    bar: 'var(--color-danger)',
    bg: '#f8dede',
    icon: 'alert'
  }
};
const glyphs = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-5M12 8h.01"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  alert: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })
};
function Alert({
  tone = 'info',
  title,
  children,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      background: t.bg,
      borderLeft: '4px solid ' + t.bar,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      fontFamily: 'var(--font-body)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bar,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, glyphs[t.icon])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      fontSize: 'var(--fs-body)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-snug)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'color-mix(in srgb, var(--aisi-navy) 45%, transparent)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: '100%',
      maxWidth: width,
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 4,
      lineHeight: 0,
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-6)',
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos[placement],
      background: 'var(--aisi-navy)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const cbId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-strong)'),
      background: checked ? 'var(--color-primary)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  iconLeft = null,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--surface-subtle)' : '#fff',
      border: '1.5px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: 44,
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  id,
  ...rest
}) {
  const rId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: '50%',
      border: '1.5px solid ' + (checked ? 'var(--color-primary)' : 'var(--border-strong)'),
      background: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 44,
      padding: '0 40px 0 14px',
      background: disabled ? 'var(--surface-subtle)' : '#fff',
      border: '1.5px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'object' ? o.value : o;
    const lbl = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  ...rest
}) {
  const sId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: sId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-primary)' : 'var(--gray-300)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].id ?? tabs[0]));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1.5px solid var(--border-subtle)',
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, tabs.map(t => {
    const id = t.id ?? t;
    const label = t.label ?? t;
    const isActive = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      onClick: () => select(id),
      style: {
        position: 'relative',
        padding: '12px 2px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-body)',
        fontWeight: isActive ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: isActive ? 'var(--aisi-navy)' : 'var(--text-muted)',
        transition: 'color var(--dur-base) var(--ease-standard)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1.5,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: isActive ? 'var(--color-primary)' : 'transparent',
        transition: 'background var(--dur-base) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// AISI marketing site — shared chrome (header + footer)
function Logo({
  light,
  height = 30
}) {
  const src = light ? '../../assets/logo/aisi-mark-white.png' : '../../assets/logo/aisi-mark.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "AISI",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}
function Header({
  route,
  onNav
}) {
  const links = [['home', 'Accueil'], ['services', 'Services'], ['about', 'À propos'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: route === id ? 700 : 500,
      color: route === id ? 'var(--aisi-navy)' : 'var(--text-muted)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('contact')
  }, "Nous contacter")));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--aisi-navy)',
      color: '#fff',
      padding: '56px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--aisi-blue-60)',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 260,
      marginTop: 12
    }
  }, "Cloud, data et cybers\xE9curit\xE9. Des \xE9quipes proches du terrain pour acc\xE9l\xE9rer votre transformation.")), [['Services', ['Cloud', 'Data', 'Cybersécurité', 'DevOps']], ['Société', ['À propos', 'Carrières', 'Actualités']], ['Contact', ['Paris', 'Lyon', 'Nantes']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      color: 'var(--aisi-blue-60)',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.15)',
      fontSize: 13,
      color: 'var(--aisi-blue-60)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AISI. Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("span", null, "Mentions l\xE9gales \xB7 Confidentialit\xE9")));
}
Object.assign(window, {
  Logo,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactPage.jsx
try { (() => {
// AISI contact screen — form + info, interactive submit
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    domain: 'Cloud & Infrastructure',
    msg: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const valid = form.name && /.+@.+\..+/.test(form.email);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-50)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '64px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--aisi-navy)',
      margin: '14px 0 16px',
      letterSpacing: '-0.01em'
    }
  }, "Parlons de votre projet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, "D\xE9crivez votre besoin en quelques mots, un expert vous recontacte sous 48 h."), [['Paris', '12 rue de la Tech, 75002'], ['Lyon', '4 quai du Rhône, 69002'], ['Nantes', '8 rue des Halles, 44000']].map(([c, a]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--aisi-blue-30)',
      color: 'var(--aisi-navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--aisi-navy)',
      fontSize: 15
    }
  }, c), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, a))))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#d7f0e3',
      color: 'var(--color-success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--aisi-navy)',
      margin: '0 0 8px'
    }
  }, "Message envoy\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      margin: '0 0 20px'
    }
  }, "Merci ", form.name.split(' ')[0], ", nous revenons vers vous tr\xE8s vite."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        domain: 'Cloud & Infrastructure',
        msg: ''
      });
    }
  }, "Nouveau message")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom complet",
    placeholder: "Jean Dupont",
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail professionnel",
    type: "email",
    placeholder: "nom@entreprise.fr",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Domaine",
    options: ['Cloud & Infrastructure', 'Data & IA', 'Cybersécurité', 'DevOps & Delivery'],
    value: form.domain,
    onChange: set('domain')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)'
    }
  }, "Votre besoin"), /*#__PURE__*/React.createElement("textarea", {
    value: form.msg,
    onChange: set('msg'),
    rows: 4,
    placeholder: "D\xE9crivez votre projet\u2026",
    style: {
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      resize: 'vertical',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    disabled: !valid,
    onClick: () => setSent(true)
  }, "Envoyer la demande")))));
}
Object.assign(window, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// AISI homepage
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  stroke = 2
}) {
  const paths = {
    cloud: /*#__PURE__*/React.createElement("path", {
      d: "M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 6.5 19Z"
    }),
    database: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
      cx: "12",
      cy: "5",
      rx: "8",
      ry: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
    }),
    git: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 9v6M18 12a9 9 0 0 1-9 9"
    })),
    arrow: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths[name]);
}
const SERVICES = [['cloud', 'Cloud & Infrastructure', 'Migration, FinOps et infogérance sur AWS, Azure et GCP.'], ['database', 'Data & IA', 'Plateformes data, analytics et cas d’usage IA opérationnels.'], ['shield', 'Cybersécurité', 'Audit, SOC managé et mise en conformité continue.'], ['git', 'DevOps & Delivery', 'Automatisation CI/CD et culture produit de bout en bout.']];
function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #fff 0%, var(--aisi-blue-30) 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Cloud \xB7 Data \xB7 Cybers\xE9curit\xE9"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--aisi-navy)',
      margin: '18px 0 20px'
    }
  }, "Acc\xE9l\xE9rez votre transformation num\xE9rique"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 480,
      marginBottom: 28
    }
  }, "AISI accompagne les entreprises et les administrations sur leurs projets d\u2019infrastructure, de donn\xE9es et de s\xE9curit\xE9 \u2014 avec des experts proches du terrain."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 18
    }),
    onClick: () => onNav('contact')
  }, "D\xE9marrer un projet"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('services')
  }, "Nos services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, SERVICES.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--aisi-blue-30)',
      color: 'var(--aisi-navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--aisi-navy)'
    }
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--aisi-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '44px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['+450', 'projets livrés'], ['98%', 'clients fidèles'], ['3', 'agences en France'], ['+180', 'experts certifiés']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--aisi-blue)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--aisi-blue-60)',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Nos expertises"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 39,
      color: 'var(--aisi-navy)',
      margin: '14px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Un partenaire pour chaque \xE9tape")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, SERVICES.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--aisi-orange-30)',
      color: 'var(--color-accent-hover)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--aisi-navy)',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto 88px',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(120deg, var(--aisi-blue), var(--aisi-navy))',
      borderRadius: 'var(--radius-xl)',
      padding: '56px 48px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      margin: '0 0 12px'
    }
  }, "Parlons de votre projet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--aisi-blue-60)',
      margin: '0 0 24px'
    }
  }, "Un premier \xE9change gratuit avec nos experts, sans engagement."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Prendre rendez-vous"))));
}
Object.assign(window, {
  HomePage,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesPage.jsx
try { (() => {
// AISI services detail page
function ServicesPage({
  onNav
}) {
  const [active, setActive] = React.useState('cloud');
  const detail = {
    cloud: {
      icon: 'cloud',
      title: 'Cloud & Infrastructure',
      tags: ['AWS', 'Azure', 'GCP', 'FinOps'],
      points: ['Stratégie de migration et landing zones', 'Optimisation des coûts (FinOps)', 'Infogérance 24/7 et supervision', 'Infrastructure as Code']
    },
    data: {
      icon: 'database',
      title: 'Data & IA',
      tags: ['Snowflake', 'dbt', 'MLOps', 'BI'],
      points: ['Plateformes data modernes', 'Gouvernance et qualité des données', 'Cas d’usage IA opérationnels', 'Dashboards et self-service BI']
    },
    security: {
      icon: 'shield',
      title: 'Cybersécurité',
      tags: ['SOC', 'Audit', 'ISO 27001', 'Pentest'],
      points: ['Audit et cartographie des risques', 'SOC managé et réponse à incident', 'Mise en conformité (RGPD, NIS2)', 'Sensibilisation des équipes']
    },
    devops: {
      icon: 'git',
      title: 'DevOps & Delivery',
      tags: ['CI/CD', 'Kubernetes', 'GitOps', 'SRE'],
      points: ['Chaînes CI/CD automatisées', 'Plateformes Kubernetes managées', 'Culture produit et SRE', 'Observabilité de bout en bout']
    }
  };
  const items = [['cloud', 'Cloud & Infrastructure'], ['data', 'Data & IA'], ['security', 'Cybersécurité'], ['devops', 'DevOps & Delivery']];
  const d = detail[active];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--aisi-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px 56px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      margin: '14px 0 12px',
      letterSpacing: '-0.02em'
    }
  }, "Nos expertises"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--aisi-blue-60)',
      maxWidth: 560,
      margin: 0
    }
  }, "Quatre p\xF4les d\u2019expertise compl\xE9mentaires, mobilisables ensemble ou s\xE9par\xE9ment."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 32px 80px',
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setActive(id),
    style: {
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: active === id ? 'var(--aisi-blue-30)' : 'transparent',
      color: active === id ? 'var(--aisi-navy)' : 'var(--text-muted)',
      fontFamily: 'var(--font-display)',
      fontWeight: active === id ? 700 : 500,
      fontSize: 15,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)'
    }
  }, label))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)",
    accent: "blue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--aisi-blue)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--aisi-navy)',
      margin: 0
    }
  }, d.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, d.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "neutral"
  }, t))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 14
    }
  }, d.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--aisi-blue)',
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNav('contact')
  }, "Discuter de ce besoin")))));
}
function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "\xC0 propos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 42,
      color: 'var(--aisi-navy)',
      margin: '14px 0 20px',
      letterSpacing: '-0.02em'
    }
  }, "Des experts proches du terrain"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginBottom: 40
    }
  }, "Depuis notre cr\xE9ation, nous mettons la proximit\xE9 et l\u2019excellence technique au service de nos clients. Nos \xE9quipes interviennent partout en France, au plus pr\xE8s de vos enjeux m\xE9tier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['Proximité', 'Des consultants sur site, dans nos trois agences.'], ['Expertise', 'Des certifications sur les principales technologies du marché.'], ['Engagement', 'Un suivi de bout en bout, du cadrage à la production.']].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--aisi-navy)',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d)))));
}
Object.assign(window, {
  ServicesPage,
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
