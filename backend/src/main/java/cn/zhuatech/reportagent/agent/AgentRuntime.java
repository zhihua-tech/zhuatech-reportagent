/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.agent;
import org.springframework.stereotype.Component; import java.util.List; import java.util.Map;
/** 企业经营报告智能体平台运行边界；默认演示执行器不连接真实模型、业务系统或外部通信渠道。 */
public interface AgentRuntime {
 AgentResult run(AgentRequest request);
 record AgentRequest(String objective,Map<String,String> context){}
 record AgentStep(String name,String status,String evidence){}
 record AgentResult(String runtime,String summary,List<AgentStep> steps,Map<String,Object> metrics){}
}
@Component class DemoAgentRuntime implements AgentRuntime {
 public AgentResult run(AgentRequest request){
  return new AgentResult("management-report-demo","已完成经营指标汇总、异常解释和管理摘要草拟，敏感财务信息等待指标负责人确认。",List.of(new AgentStep("指标快照","COMPLETED","锁定 32 个认证经营指标"),new AgentStep("差异解释","COMPLETED","识别 5 项关键波动"),new AgentStep("报告发布","PENDING","等待经营负责人签发")),Map.of("evidenceItems",32,"suggestedActions",5,"objectiveLength",request.objective().length()));
 }
}
