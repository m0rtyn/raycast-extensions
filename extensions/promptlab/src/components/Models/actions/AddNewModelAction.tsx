import { Action, Icon } from "@raycast/api";
import ModelForm from "../ModelForm";
import { ModelManager } from "../../../utils/types";
import { isActionEnabled } from "../../../utils/action-utils";
import { defaultAdvancedSettings } from "../../../data/default-advanced-settings";

/**
 * Action to add a new model.
 * @param props.models The model manager object.
 * @param props.settings The advanced settings object.
 * @returns An action component.
 */
export default function AddNewModelAction(props: { models: ModelManager; settings: typeof defaultAdvancedSettings }) {
  const { models, settings } = props;

  if (!isActionEnabled("AddNewModelAction", settings)) {
    return null;
  }

  return (
    <Action.Push
      title="Add New Model"
      icon={Icon.PlusCircle}
      shortcut={{ modifiers: ["cmd"], key: "n" }}
      target={<ModelForm models={models} />}
    />
  );
}
