import { z } from "zod";

export class ProductSchemas {
  static cpu = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    watts_consumption: z
      .number({ message: "El consumo en watts debe ser un número" })
      .int({ message: "El consumo en watts debe ser un número entero" })
      .positive({ message: "El consumo en watts debe ser positivo" })
      .optional(),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    platform_id: z
      .number({ message: "El ID de la plataforma debe ser un número" })
      .int({ message: "El ID de la plataforma debe ser un número entero" })
      .positive({ message: "El ID de la plataforma debe ser positivo" }),

    socket_id: z
      .number({ message: "El ID del socket debe ser un número" })
      .int({ message: "El ID del socket debe ser un número entero" })
      .positive({ message: "El ID del socket debe ser positivo" }),

    frequency: z
      .number({ message: "La frecuencia debe ser un número" })
      .positive({ message: "La frecuencia debe ser positiva" }),

    integrated: z
      .string({
        message: "Los gráficos integrados deben ser una cadena de texto",
      })
      .max(100, {
        message: "Los gráficos integrados deben tener máximo 100 caracteres",
      })
      .nullable()
      .optional(),
  });

  static ram = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    watts_consumption: z
      .number({ message: "El consumo en watts debe ser un número" })
      .int({ message: "El consumo en watts debe ser un número entero" })
      .positive({ message: "El consumo en watts debe ser positivo" })
      .optional(),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    type_id: z
      .number({ message: "El ID del tipo debe ser un número" })
      .int({ message: "El ID del tipo debe ser un número entero" })
      .positive({ message: "El ID del tipo debe ser positivo" }),

    capacity_gb: z
      .number({ message: "La capacidad en GB debe ser un número" })
      .int({ message: "La capacidad en GB debe ser un número entero" })
      .positive({ message: "La capacidad en GB debe ser positiva" }),

    speed_mhz: z
      .number({ message: "La velocidad en MHz debe ser un número" })
      .int({ message: "La velocidad en MHz debe ser un número entero" })
      .positive({ message: "La velocidad en MHz debe ser positiva" }),
  });

  static motherboard = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    watts_consumption: z
      .number({ message: "El consumo en watts debe ser un número" })
      .int({ message: "El consumo en watts debe ser un número entero" })
      .positive({ message: "El consumo en watts debe ser positivo" })
      .optional(),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    socket_id: z
      .number({ message: "El ID del socket debe ser un número" })
      .int({ message: "El ID del socket debe ser un número entero" })
      .positive({ message: "El ID del socket debe ser positivo" }),

    platform_id: z
      .number({ message: "El ID de la plataforma debe ser un número" })
      .int({ message: "El ID de la plataforma debe ser un número entero" })
      .positive({ message: "El ID de la plataforma debe ser positivo" }),

    ram_slots: z
      .number({ message: "Los slots de RAM deben ser un número" })
      .int({ message: "Los slots de RAM deben ser un número entero" })
      .positive({ message: "Los slots de RAM deben ser positivos" }),

    ram_type_id: z
      .number({ message: "El ID del tipo de RAM debe ser un número" })
      .int({ message: "El ID del tipo de RAM debe ser un número entero" })
      .positive({ message: "El ID del tipo de RAM debe ser positivo" }),
  });

  static graphics_card = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    watts_consumption: z
      .number({ message: "El consumo en watts debe ser un número" })
      .int({ message: "El consumo en watts debe ser un número entero" })
      .positive({ message: "El consumo en watts debe ser positivo" })
      .optional(),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    ram_type_id: z
      .number({ message: "El ID del tipo de RAM debe ser un número" })
      .int({ message: "El ID del tipo de RAM debe ser un número entero" })
      .positive({ message: "El ID del tipo de RAM debe ser positivo" }),

    capacity_gb: z
      .number({ message: "La capacidad en GB debe ser un número" })
      .int({ message: "La capacidad en GB debe ser un número entero" })
      .positive({ message: "La capacidad en GB debe ser positiva" }),
  });

  static disk = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    watts_consumption: z
      .number({ message: "El consumo en watts debe ser un número" })
      .int({ message: "El consumo en watts debe ser un número entero" })
      .positive({ message: "El consumo en watts debe ser positivo" })
      .optional(),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    capacity_gb: z
      .number({ message: "La capacidad en GB debe ser un número" })
      .int({ message: "La capacidad en GB debe ser un número entero" })
      .positive({ message: "La capacidad en GB debe ser positiva" }),

    technology_id: z
      .number({ message: "El ID de la tecnología debe ser un número" })
      .int({ message: "El ID de la tecnología debe ser un número entero" })
      .positive({ message: "El ID de la tecnología debe ser positivo" }),
  });

  static case_pc = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    colors: z
      .string({ message: "Los colores deben ser una cadena de texto" })
      .max(100, {
        message: "Los colores deben tener máximo 100 caracteres",
      })
      .optional(),
  });

  static power_supply = z.object({
    product: z.string().max(100, {
      message: "El nombre del producto debe tener máximo 100 caracteres",
    }),

    stock: z
      .number()
      .int({ message: "El stock debe ser un número entero" })
      .nonnegative({ message: "El stock no puede ser negativo" }),

    image: z
      .string()
      .max(255, {
        message: "La URL de la imagen debe tener máximo 255 caracteres",
      })
      .optional(),

    watts: z
      .number({ message: "Los watts deben ser un número" })
      .int({ message: "Los watts deben ser un número entero" })
      .positive({ message: "Los watts deben ser positivos" }),

    modular: z
      .boolean({ message: "Modular debe ser verdadero o falso" })
      .optional(),

    certification_id: z
      .number({ message: "El ID de la certificación debe ser un número" })
      .int({ message: "El ID de la certificación debe ser un número entero" })
      .positive({ message: "El ID de la certificación debe ser positivo" }),
  });
}
