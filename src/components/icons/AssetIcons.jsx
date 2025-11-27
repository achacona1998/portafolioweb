import React from "react";

// Static imports return the final asset URL in Vite, suitable for <img src>
import Git from "../../assets/svg/Git.svg";
import Jest from "../../assets/svg/Jest.svg";
import MySQL from "../../assets/svg/MySQL.svg";
import Postgres from "../../assets/svg/Postgres.svg";
import Pytest from "../../assets/svg/Pytest.svg";
import Python from "../../assets/svg/Python.svg";
import Render from "../../assets/svg/Render.svg";
import SQLite from "../../assets/svg/SQLite.svg";
import Vercel from "../../assets/svg/Vercel.svg";
import Vitest from "../../assets/svg/Vitest.svg";
import Docker from "../../assets/svg/docker.svg"; // note: lowercase filename

function createSvgIcon(src, defaultAlt) {
  return function SvgAssetIcon({
    className,
    alt = defaultAlt,
    title,
    size,
    width,
    height,
    style,
    ...rest
  }) {
    const finalWidth = width ?? size;
    const finalHeight = height ?? size;
    return (
      <img
        src={src}
        alt={alt}
        title={title}
        className={className}
        width={finalWidth}
        height={finalHeight}
        style={style}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    );
  };
}

export const GitIcon = createSvgIcon(Git, "Git");
export const JestIcon = createSvgIcon(Jest, "Jest");
export const MySQLIcon = createSvgIcon(MySQL, "MySQL");
export const PostgresIcon = createSvgIcon(Postgres, "PostgreSQL");
export const PytestIcon = createSvgIcon(Pytest, "Pytest");
export const PythonIcon = createSvgIcon(Python, "Python");
export const RenderIcon = createSvgIcon(Render, "Render");
export const SQLiteIcon = createSvgIcon(SQLite, "SQLite");
export const VercelIcon = createSvgIcon(Vercel, "Vercel");
export const VitestIcon = createSvgIcon(Vitest, "Vitest");
export const DockerIcon = createSvgIcon(Docker, "Docker");

// Optional: consolidated map for dynamic usage
export const AssetIconsMap = {
  git: GitIcon,
  jest: JestIcon,
  mysql: MySQLIcon,
  postgres: PostgresIcon,
  pytest: PytestIcon,
  python: PythonIcon,
  render: RenderIcon,
  sqlite: SQLiteIcon,
  vercel: VercelIcon,
  vitest: VitestIcon,
  docker: DockerIcon,
};

export default AssetIconsMap;

